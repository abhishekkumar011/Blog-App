import React, { useCallback, useEffect } from "react";
import { MyInput, MyButton, RTE, Select, Container } from "../../components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import databaseService from "../../appwrite/config";

const PostForm = ({ post }) => {
  const { register, handleSubmit, control, watch, getValues, setValue } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    console.log(data);
    if (post) {
      const file = data.image[0]
        ? await databaseService.uploadFile(data.image[0])
        : null;

      if (file) {
        databaseService.deleteFile(post.featuredImage);
      }

      const dbPost = await databaseService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await databaseService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await databaseService.createPost({
          ...data,
          userId: userData.$id,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    }

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <Container>
      <form
        onSubmit={handleSubmit(submit)}
        className="p-5 border-2 border-black/20 rounded-md mt-5 shadow-lg flex flex-wrap"
      >
        {/* Left Part */}
        <div className="w-2/3 px-2">
          <MyInput
            label="Title"
            placeholder="Enter the title"
            classname="mb-4"
            {...register("title", { required: true })}
          />
          <MyInput
            label="Slug"
            placeholder="slug"
            classname="mb-4"
            {...register("slug", { required: true })}
            onInput={(e) => {
              setValue("slug", slugTransform(e.currentTarget.value), {
                shouldValidate: true,
              });
            }}
          />

          <RTE
            label="Content"
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
        </div>
        {/* Right Part */}
        <div className="w-1/3 px-2">
          <MyInput
            label="Featured Image"
            type="file"
            classname="mb-4"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
          />

          {post && (
            <div className="w-full mb-4">
              <img
                src={databaseService.getFilePreview(post.featuredImage)}
                alt={post.title}
                className="rounded-lg"
              />
            </div>
          )}

          <Select
            className="mt-1 mb-11"
            label="Status"
            options={["active", "inactive"]}
            {...register("status", { required: true })}
          />

          <MyButton type="submit" classname="w-full">
            {post ? "Update" : "Submit"}
          </MyButton>
        </div>
      </form>
    </Container>
  );
};

export default PostForm;

import React from "react";
import { MyInput, MyButton, RTE, Select, Container } from "../../components";
import { useForm } from "react-hook-form";

const PostForm = () => {
  const { control } = useForm();
  return (
    <Container>
      <form className="p-5 border-2 border-black/20 rounded-md mt-5 shadow-lg flex flex-wrap">
        {/* Left Part */}
        <div className="w-2/3 px-2">
          <MyInput
            label="Title"
            placeholder="Enter the title"
            classname="mb-4"
          />
          <MyInput label="Slug" placeholder="slug" classname="mb-4" />

          <RTE label="Content" name="content" control={control} />
        </div>
        {/* Right Part */}
        <div className="w-1/3 px-2">
          <MyInput
            label="Featured Image"
            type="file"
            classname="mb-4"
            accept="image/png, image/jpg, image/jpeg, image/gif"
          />

          <Select
            className="mt-1 mb-11"
            label="Status"
            options={["active", "inactive"]}
          />

          <MyButton type="submit" classname="w-full">
            Submit
          </MyButton>
        </div>
      </form>
    </Container>
  );
};

export default PostForm;

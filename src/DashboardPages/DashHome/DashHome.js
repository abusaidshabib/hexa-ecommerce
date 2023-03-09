import React from 'react';
import { useForm } from 'react-hook-form';
import "./DashHome.css";

const DashHome = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="edit-form">

      <label className='title3' htmlFor='title'>Product Title</label><br />
      <input className='input_form_field' id="title" {...register("title")} /> <br />

      <label className='title3' htmlFor='price'>Product price</label><br />
      <input className='input_form_field' id="price" {...register("price")} /><br />

      <label className='title3' htmlFor='description'>Product description</label><br />
      <textarea className='input_form_field' name="" id="description" cols="10" rows="10" {...register("description")}></textarea>

      <label className='title3' htmlFor='discountPercentage
'>Product DiscountPercentage</label><br />
      <input className='input_form_field' id="discountPercentage" {...register("discountPercentage")} /><br />

      <label className='title3' htmlFor='thumbnail'>Product thumbnail</label><br />
      <input className='input_form_field' type="url" id="thumbnail"{...register("thumbnail")} /><br />

      <label className='title3' htmlFor='rating'>Product rating</label><br />
      <input className='input_form_field' type="number" id="rating"{...register("rating")} /><br />

      <label className='title3' htmlFor='stock'>stock</label><br />
      <input className='input_form_field' type="number" id="stock"{...register("available")} /><br />

      <label className='title3' htmlFor='img'>Product images url(1-4)</label><br />
      <input className='input_form_field' type="url" id="img1"{...register("img1")} /><br />
      <input className='input_form_field' type="url" id="img2"{...register("img2")} /><br />
      <input className='input_form_field' type="url" id="img3"{...register("img3")} /><br />
      <input className='input_form_field' type="url" id="img4"{...register("img4")} /><br />

      <label className='title3' htmlFor='category'>Product Category</label><br />
      <input className='input_form_field' id="category" {...register("category")} /><br />

      <label className='title3' htmlFor='collection'>Product Collection</label><br />
      <input className='input_form_field' id="collection" {...register("collection")} /><br />

      <input className='submit_btn_form' type="submit" value="" />
    </form>
  );
};

export default DashHome;
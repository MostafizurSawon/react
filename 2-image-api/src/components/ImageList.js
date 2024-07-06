import ImageShow from "./ImageShow";

function ImageList({images}) {
  const renderedImages = images.map((image) => {
    console.log(image);
    return <ImageShow image={image} key={image.id} />
  });
  
  return (
  <div>
    <h1>Result Found: {images.length}</h1>
    <div className="image-list">
    {renderedImages}
     </div>
  </div>
  );

}

export default ImageList;

const ContentPage = ({ data }) => {
  return (
    <div>
      <h1 className="text-lg">{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
};

export default ContentPage;

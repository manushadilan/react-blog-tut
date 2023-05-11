import './singlePost.css';

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor, sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Manusha</b>
          </span>
          <span className="singlePostTime">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde numquam
          ipsum, cum veniam error voluptas consequatur dignissimos quis
          laudantium corporis ea maxime fuga reprehenderit, cupiditate doloribus
          quidem mollitia consectetur natus! Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Unde numquam ipsum, cum veniam error
          voluptas consequatur dignissimos quis laudantium corporis ea maxime
          fuga reprehenderit, cupiditate doloribus quidem mollitia consectetur
          natus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
          numquam ipsum, cum veniam error voluptas consequatur dignissimos quis
          laudantium corporis ea maxime fuga reprehenderit, cupiditate doloribus
          quidem mollitia consectetur natus! Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Unde numquam ipsum, cum veniam error
          voluptas consequatur dignissimos quis laudantium corporis ea maxime
          fuga reprehenderit, cupiditate doloribus quidem mollitia consectetur
          natus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
          numquam ipsum, cum veniam error voluptas consequatur dignissimos quis
          laudantium corporis ea maxime fuga reprehenderit, cupiditate doloribus
          quidem mollitia consectetur natus!
        </p>
      </div>
    </div>
  );
}

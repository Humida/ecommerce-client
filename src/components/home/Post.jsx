import React from "react";

function Post(props) {
  return (
    <div className="post">
      <div className="post__container">
        <div className="post__item">
          <img
            src="https://images.unsplash.com/photo-1604822187148-911f387ea6a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
            alt=""
          />
          <span className="post__item-type">Fashion Tips</span>
          <h2 className="post__item-tilte">
            What Curling Irons Are The Best Ones
          </h2>
          <p className="post__item-desc">
            Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
            voluptas iure, delectus..
          </p>
          {/* <button>Read more</button> */}
        </div>
        <div className="post__item">
          <img
            src="https://images.unsplash.com/photo-1555980483-93e7b3529e1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt=""
          />
          <span className="post__item-type">Fashion Tips</span>
          <h2 className="post__item-tilte">
            What Curling Irons Are The Best Ones
          </h2>
          <p className="post__item-desc">
            Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
            voluptas iure, delectus..
          </p>
          {/* <button>Read more</button> */}
        </div>
      </div>
    </div>
  );
}

export default Post;

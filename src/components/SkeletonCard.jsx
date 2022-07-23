import React from "react";
import Skeleton from "react-loading-skeleton";
const SkeletonCard = () => {
    return (
      <section>
        <ul className="list">
          {Array(6)
            .fill()
            .map((item, index) => (
              <li className="card" key={index}>
                <h4 className="card-title">
                    <Skeleton borderRadius={25} style={{marginLeft:'50px '}} height={100} width={100} />  
                </h4>
                <p className="card-body">
                    <Skeleton height={36} borderRadius={5} style={{marginLeft:'30px '}} width={`80%`} />
                </p>
              </li>
            ))}
        </ul>
      </section>
    );
  };
  export default SkeletonCard;

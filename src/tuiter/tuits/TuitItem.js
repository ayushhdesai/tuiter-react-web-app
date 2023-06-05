import React from 'react';
import TuitStats from './TuitStats';
import { useDispatch } from "react-redux";
import { deleteTuit } from '../reducers/tuits-reducer';
import { BiX } from 'react-icons/bi';

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-3 col-md-1">
          <img width={40} height={40} className="float-start rounded-circle" src={require(`./images/${tuit.image}`)} alt={tuit.title} />
        </div>
        <div className="col-6 col-md-10">
          <div><b>{tuit.userName}</b> {tuit.handle} · {tuit.time}</div>
          <div>{tuit.tuit}</div>
          <TuitStats tuit={tuit} />
        </div>
        <div className='col-3 col-md-1'>
        <BiX className="float-end" onClick={() => deleteTuitHandler(tuit._id)} />
        </div>
      </div>
    </li>
  );
};

export default TuitItem;

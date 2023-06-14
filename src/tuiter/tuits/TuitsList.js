import React from "react";
import { useEffect } from "react";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import TuitItem from "./TuitItem";
import { findTuitsThunk } from "../services/tuits-thunks";

const TuitsList = () => {
  const { tuits, loading } = useSelector(state => state.tuits);
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(findTuitsThunk())
<<<<<<< HEAD
  }, [dispatch])
=======
  })
>>>>>>> d383d0934a9b6e8707d177fb23cbfe5ac047245c
 return(
   <ul className="list-group">
    { loading &&
       <li className="list-group-item">
         Loading...
       </li>
     }
     {
       tuits.map(tuit =>
         <TuitItem
           key={tuit._id} tuit={tuit}/> )
     }
   </ul>
 );
};

export default TuitsList;

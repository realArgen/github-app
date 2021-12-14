import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReadme, updateRepoName } from '../../redux/reducers/github';

const ListItem = ({ name }) => {

    const dispatch = useDispatch();
    const userName = useSelector(state => state.github.userName);

    const getRepoReadme = () => {
        dispatch(getReadme(userName, name));
        dispatch(updateRepoName(name));
    }

    return (
        <li className="user">
            <Link to='/md' onclick={getRepoReadme}>{name}</Link>
        </li>
    )
}

export default ListItem;
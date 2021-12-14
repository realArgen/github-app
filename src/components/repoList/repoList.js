import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from '../listItem/listItem';

const RepoList = () => {

    const reposArr = useSelector(state => state.github.gitHubData);


    return (
        <ul>
            {
                reposArr.map((el) => {
                    return <ListItem name={el.name} key={el.id} />
                })
            }
        </ul>
    )
}

export default RepoList;
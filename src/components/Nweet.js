import React, { useState } from 'react';
import { dbService } from 'fbase';

const Nweet = ({ nweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const onDeleteClick = async () => {
        const ok = window.confirm('Are you sure? you want to delete this nweet?');
        if(ok) {
            await dbService.doc(`nweets/${nweetObj.id}`).delete();
        }
    };
    const toggleEditing = () => {
        setEditing((prev) => !prev)
        setNewNweet(nweetObj.text);
    };
    const onChange = (event) => {
        const {target :{value}} = event;
        setNewNweet(value);
    };
    const onSubmit = async(event) => {
        event.preventDefault();
        dbService.doc(`nweets/${nweetObj.id}`).update({
            text: newNweet
        });
        setEditing(false);
    };
    return (
        <div>
            {
                editing ? (
                    <>
                        <form onSubmit={onSubmit}>
                            <input type="text" placeholder="Edit Nweet" value={newNweet} required onChange={onChange} />
                            <input type="submit" value="Update Nweet" />
                        </form>
                        <button onClick={toggleEditing}>Cancle</button>
                    </>
                ) : (
                    <>
                        <h4>{nweetObj.text}</h4>
                        {isOwner && (
                           <>
                               <button onClick={toggleEditing}>Edit Nweet</button>
                               <button onClick={onDeleteClick}>Delete Nweet</button>
                           </>
                        )}
                   </>
                )
            }
        </div>
    );
};

export default Nweet;
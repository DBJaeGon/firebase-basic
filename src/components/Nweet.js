import React, { useState } from 'react';
import { dbService, storageService } from 'fbase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

const Nweet = ({ nweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);

    const onDeleteClick = async () => {
        const ok = window.confirm('Are you sure? you want to delete this nweet?');
        if(ok) {
            await dbService.doc(`nweets/${nweetObj.id}`).delete();
            if(nweetObj.attachmentUrl) {
                await storageService.refFromURL(nweetObj.attachmentUrl).delete();
            }
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
        <div className="nweet">
            {
                editing ? (
                    <>
                        <form onSubmit={onSubmit} className="container nweetEdit">
                            <input type="text" placeholder="Edit Nweet" value={newNweet} required autoFocus onChange={onChange} className="formInput" />
                            <input type="submit" value="Update Nweet" className="formBtn" />
                        </form>
                        <span onClick={toggleEditing} className="formBtn cancelBtn">Cancel</span>
                    </>
                ) : (
                    <>
                        <h4>{nweetObj.text}</h4>
                        {nweetObj.attachmentUrl && <img src={nweetObj.attachmentUrl} />}
                        {isOwner && (
                            <div className="nweet__actions">
                                <span onClick={toggleEditing}>
                                    <FontAwesomeIcon icon={faPencilAlt} />
                                </span>
                                <span onClick={onDeleteClick}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </span>
                            </div>
                        )}
                   </>
                )
            }
        </div>
    );
};

export default Nweet;
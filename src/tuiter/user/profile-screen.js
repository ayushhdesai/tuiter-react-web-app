import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk } from "../services/auth-thunks";

function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.user);
    console.log("currentUser", currentUser)
    const [profile, setProfile] = useState(currentUser);
    console.log("profile", profile)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const getProfile = async () => {
            const { payload } = await dispatch(profileThunk());
            setProfile(payload);
        };
        getProfile();
    }, [dispatch]);

    useEffect(() => {
        setProfile(currentUser);
    }, [currentUser]);

    const handleSave = () => {
        dispatch(updateUserThunk(profile))
            .then(() => {
                console.log('User data updated successfully');
            })
            .catch((error) => {
                console.log('Error updating user data:', error);
            });
    };

    return (
        <div>
            <h1>Profile Screen</h1>
            {profile && (
                <div>
                    <div className="mt-2">
                        <label>First Name</label>
                        <input
                            className="w-75"
                            style={{ margin: '5px 10px' }}
                            type="text"
                            value={profile.firstName}
                            onChange={(event) => {
                                const newProfile = { ...profile, firstName: event.target.value };
                                setProfile(newProfile);
                            }}
                        />
                    </div>
                    <div className="mt-2">
                        <label>Last Name</label>
                        <input
                            className="w-75"
                            style={{ margin: '5px 10px' }}
                            type="text"
                            value={profile.lastName}
                            onChange={(event) => {
                                const newProfile = { ...profile, lastName: event.target.value };
                                setProfile(newProfile);
                            }}
                        />
                    </div>
                </div>
            )}
            <div className="mt-2">
                <button
                    className="btn btn-danger rounded-pill float-start"
                    style={{ margin: '5px 130px' }}
                    onClick={() => { dispatch(logoutThunk()); navigate("/tuiter/login"); }}
                >
                    Logout
                </button>
                <button
                    className="btn btn-primary rounded-pill float-start"
                    style={{ margin: '5px 130px' }}
                    onClick={handleSave} 
                >
                    Save
                </button>
            </div>

        </div>
    );
}

export default ProfileScreen;

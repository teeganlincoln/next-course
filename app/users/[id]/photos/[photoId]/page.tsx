import React from "react";

interface Props {
    params: { id: number; photoId: number };
}

const UserDetailPhotosPage = ({ params: { photoId, id } }: Props) => {
    return (
        <div>
            UserDetailPhotosPage {id} {photoId}
        </div>
    );
};

export default UserDetailPhotosPage;

import { useContext } from "react"
import { ProfileContext } from "./ProfileContext"

export default function ProfileAddres () {
    const profile = useContext(ProfileContext);

    return (
        <>
            <h2>Profile addres</h2>
            <p>alamat {profile}</p>
        </>
    )
}
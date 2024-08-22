import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config/api";



function EditPlant() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [description, setDescription] = useState("");
    const [water, setWater] = useState("");
    const [sun, setSun] = useState("");
    const [tips, setTips] = useState("");
    const [type, setType] = useState("");
    const [maintenance, setMaintenance] = useState("");
    const [link, setLink] = useState("");


    const { plantId } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${API_URL}/${plantId}`)
            .then((response) => {
                setTitle(response.data.title);
                setImage(response.data.image)
                setSubtitle(response.data.subtitle);
                setDescription(response.data.description);
                setWater(response.data.water);
                setSun(response.data.sun);
                setTips(response.data.tips);
                setType(response.data.type);
                setMaintenance(response.data.maintenance);
                setLink(response.data.link);
            })
            .catch(error => console.log(error))
    }, [plantId]);

    const handleFormSubmit = (elm) => {
        elm.preventDefault();

        const editDetails = {
            title: title,
            subtitle: subtitle,
            description: description,
            water: water,
            sun: sun,
            tips: tips,
            type: type,
            maintenance: maintenance
        }

        axios
            .put(`${API_URL}/${plantId}`, editDetails)
            .then(response => navigate(`/plant/${plantId}`))
            .catch(error => console.log("Error updating plant", error))
    }


    return (
        <div className="EditPlant">

            <h3>Edit Plant</h3>

            <form onSubmit={handleFormSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>

                <label>
                    Subtitle:
                    <input
                        type="text"
                        name="subtitle"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                    />
                </label>
                <label>
                    Image:
                    <input
                        type="link"
                        name="Image"
                        value={image}
                        onChange={(e) => {
                            setImage(e.target.value);
                        }}
                    />
                </label>
                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>

                <label>
                    Water:
                    <input
                        type="text"
                        name="water"
                        value={water}
                        onChange={(e) => setWater(e.target.value)}
                    />
                </label>
                <label>
                    Sun:
                    <input
                        type="text"
                        name="sun"
                        value={sun}
                        onChange={(e) => setSun(e.target.value)}
                    />
                </label>
                <label>
                    Tips:
                    <input
                        type="text"
                        name="tips"
                        value={tips}
                        onChange={(e) => setTips(e.target.value)}
                    />
                </label>
                <label>
                    Type:
                    <input
                        type="text"
                        name="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </label>
                <label>
                    Maintenance:
                    <input
                        type="text"
                        name="maintenance"
                        value={maintenance}
                        onChange={(e) => setMaintenance(e.target.value)}
                    />
                </label>

                <label>
                    Wiki Link:
                    <input
                        type="text"
                        name="wiki Link"
                        required
                        value={link}
                        onChange={(e) => {setLink(e.target.value)}}
                    />
                </label>

                <button type="submit">Update Plant</button>

            </form>

        </div>
    )

}

export default EditPlant;
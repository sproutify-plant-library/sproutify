import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config/api";



function EditPlant() {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [water, setWater] = useState("");
    const [sun, setSun] = useState("");
    const [tips, setTips] = useState("");
    const [type, setType] = useState("");
    const [maintenance, setMaintenance] = useState("");
    const [wiki_link, setWikiLink] = useState("");


    const { plantId } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${API_URL}/plant/${plantId}`)
            .then((response) => {
                setTitle(response.data.title);
                setSubtitle(response.data.subtitle);
                setImage(response.data.image);
                setDescription(response.data.description);
                setWater(response.data.water);
                setSun(response.data.sun);
                setTips(response.data.tips);
                setType(response.data.type);
                setMaintenance(response.data.maintenance);
                setWikiLink(response.data.wiki_link);
            })
            .catch(error => console.log(error))
    }, [plantId]);

    const handleFormSubmit = (elm) => {
        elm.preventDefault();

        const editDetails = {
            title: title,
            subtitle: subtitle,
            image: image,
            description: description,
            water: water,
            sun: sun,
            tips: tips,
            type: type,
            maintenance: maintenance,
            wiki_link: wiki_link,
        }

        axios
            .put(`${API_URL}/plant/edit/${plantId}`, editDetails)
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
                    Scientific Name:
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
                        type="url"
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
                        value={wiki_link}
                        onChange={(e) => setWikiLink(e.target.value)}
                    />
                </label>

                <button type="submit">Update Plant</button>

            </form>

        </div>
    )

}

export default EditPlant;
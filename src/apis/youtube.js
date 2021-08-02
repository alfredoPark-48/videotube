import axios from "axios";

const KEY = "AIzaSyBDH7wwYix4txxcxkJrzLW5umuHrKC8ZnY";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		type: "video",
		part: "snippet",
		maxResults: 5,
		key: KEY,
	},
});

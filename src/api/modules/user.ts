import Axios from "@/plugins/axios";
import AxiosConfig from "@/config/axiosConfig";

export default {
	queryUserInfo: (data: any = {}) => {
		return Axios({
			url: AxiosConfig.requestUrl.getUserInfo,
			method: "POST",
			data,
		});
	},
};

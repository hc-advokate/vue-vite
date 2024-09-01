export const urlToBase64 = async (url) => {
	if (!url) return "";
	await fetch(url)
		.then((response) => response.blob())
		.then((res) => {
			const blob = new Blob([res]);
			let file = new FileReader();
			file.onload = (e) => {
				return e.target?.result || "";
			};
			file.readAsDataURL(blob);
		});
};

export const fileToBase64 = (file, callback) => {
	if (!file) return "";
	const blob = file.slice();
	const fr = new FileReader();
	fr.onload = (e) => {
		if (typeof e === "function") {
			// @ts-ignore
			callback(e.target.result);
		} else {
			return e.target.result;
		}
	};
	fr.onerror = () => {
		return "";
	};
	fr.readAsDataURL(blob);
};
export const fileToBlob = (file, callback) => {
	if (!file) return "";
	const type = file.type;
	const blob = file.slice();
	const fr = new FileReader();
	fr.onload = (e) => {
		const b = new Blob([e.target.result], { type });
		if (typeof e === "function") {
			// @ts-ignore
			callback(b);
		} else {
			return b;
		}
	};
	fr.readAsDataURL(blob);
};
export const blobToBase64 = (blob, callback) => {
	if (!blob) return "";
	const fr = new FileReader();
	fr.onload = (e) => {
		if (typeof e === "function") {
			// @ts-ignore
			callback(e.target.result);
		} else {
			return e.target.result;
		}
	};
	fr.readAsDataURL(blob);
};
export const base64ToBlob = (base64) => {
	if (!base64) return "";
	let arr = base64.split(",");
	let type = arr[0].match(/:(.*?);/)[1];
	let bstr = atob(arr[1]);
	let n = bstr.length;
	let u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new Blob([u8arr], {
		type: type,
	});
};
export const blobToFile = (blob, fileName) => {
	if (!blob) return "";
	return new File([blob], fileName);
};
export const base64ToFile = (base64, fileName) => {
	if (!base64) return "";
	let arr = base64.split(",");
	let type = arr[0].match(/:(.*?);/)[1];
	let bstr = atob(arr[1]);
	let n = bstr.length;
	let u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new File([u8arr], fileName, {
		type: type,
	});
};

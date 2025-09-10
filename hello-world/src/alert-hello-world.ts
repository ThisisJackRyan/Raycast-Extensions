import { showToast, Toast } from "@raycast/api";

export default async function main() {
	await showToast({
		style: Toast.Style.Success,
		title: "hello world",
	});
}
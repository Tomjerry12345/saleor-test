import { saleorAuthClient } from "@/app/config";

export const handleSubmit = async (formData: FormData) => {
	const email = formData.get("email")?.toString();
	const password = formData.get("password")?.toString();

	console.log("email", email);
	console.log("password", password);

	if (!email || !password) {
		return Error("Username dan kata sandi tidak boleh kosong");
	}

	const { data } = await saleorAuthClient.signIn({ email: email, password }, { cache: "no-store" });

	if (data.tokenCreate.errors.length > 0) {
		if (data.tokenCreate.errors[0].message.includes("valid credentials")) {
			return Error("Username dan/atau kata sandi tidak sesuai");
		} else {
			return Error(data.tokenCreate.errors[0].message);
		}
	} else {
		return data.tokenCreate.token;
	}
};

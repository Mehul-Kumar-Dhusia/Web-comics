// export async function query(data) {
//   const response = await fetch(
//     "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
//     {
//       headers: {
//         Accept: "image/png",
//         Authorization:
//           "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
//         "Content-Type": "application/json",
//       },
//       method: "POST",
//       body: JSON.stringify(data),
//     }
//   );
//   const result = await response.blob();
//   const imageUrl = URL.createObjectURL(result);
//   return imageUrl;
// }

export async function query(data) {
  const response = await fetch(
    "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
    {
      headers: { 
        "Accept": "image/png",
        "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM", 
        "Content-Type": "application/json" 
      },
      method: "POST",
      // mode: "no-cors",
      body: JSON.stringify(data),
    }
  );
  const result = await response.blob();

  const dataUrl = await new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(result);
  });

  return dataUrl;
}

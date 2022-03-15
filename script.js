// Seu ID de client
// 1026919179205-rr8hco4l575o6n9deo63q3e9bpieapn6.apps.googleusercontent.com

// Sua chave secreta de cliente
// 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

const btnGoogle = document.getElementById("buttonDiv");

function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);
  console.log(data);

  fullName.textContent = data.name;
  sub.textContent = data.sub;
  given_name.textContent = data.given_name;
  family_name.textContent = data.family_name;
  email.textContent = data.email;
  verifiedEmail.textContent = data.email_verified;
  picture.src = data.picture
}

window.onload = function () {
  google.accounts.id.initialize({
    client_id:
      "1026919179205-rr8hco4l575o6n9deo63q3e9bpieapn6.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });

  google.accounts.id.renderButton(
    btnGoogle,
    {
      theme: "filled_black",
      size: "large",
      type: "standard",
      shape: "pill",
      text: "$ {button.text}",
      size: "large",
      logo_alignment: "left",
    } // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
};

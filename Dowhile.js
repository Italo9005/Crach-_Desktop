const usersSocial = {
  github: "Italo9005",
  youtube: "/channel/UCbGY7I4CKFVMUEKZVtRw9uA",
  facebook: "italo.lopes.9822",
  instagram: "osara_il",
  twitter: "osarail"
}  

function changeSocialUsernames() {
  for (const li of socialUsernames.children) {
    const socialLink = li.getAttribute("class");
    li.children[0].href = `https://www.${socialLink}.com/${usersSocial[socialLink]}`;
  }
}

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${usersSocial.github}`;

  fetch(url)
    .then(response => response.json())
    .then(dataInJson => {
      const { name, login, avatar_url, bio, html_url } = dataInJson;
      developerName.innerText = name;
      bio.innerText = bio;
      githubUsername.innerText = login;
      avatarImage.src = avatar_url;
      githubLinkProfile.href = html_url;
    });
}

changeSocialUsernames();
getGithubProfileInfos();
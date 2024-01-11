function MainPage() {
  const item = localStorage.getItem("user");
  const user = JSON.parse(item);
  console.info(user);

  return (
    <>
      <h1>MainPage</h1>
      <i>{user.email}</i>
    </>
  );
}

export default MainPage;

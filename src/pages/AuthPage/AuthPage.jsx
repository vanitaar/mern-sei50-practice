import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function AuthPage({ setUser }) {
  return (
    <>
      <p>AuthPage</p>
      <SignUpForm setUser={setUser} />
    </>
  );
}

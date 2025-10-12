const BASE_URL = "https://backendd-5u.onrender.com";

const testBackend = async () => {
  try {
    const res = await fetch(`${BASE_URL}/`);
    const data = await res.text();
    console.log("Backend says:", data);
  } catch (err) {
    console.error("Error connecting to backend:", err);
  }
};

testBackend();

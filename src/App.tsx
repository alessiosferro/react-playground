import InputControl from "./components/forms/InputControl/InputControl";
import useFormState from "./hooks/use-form-state";
import "./App.css";

export const App = () => {
  const { form, handleAgeChange, handleFullNameChange } = useFormState({
    fullName: "Alessio Sferro",
    age: "27",
  });

  return (
    <div className="app-container">
      <InputControl
        label="Full name"
        name="fullName"
        required={true}
        type="text"
        onChange={handleFullNameChange}
        value={form.fullName}
      />

      <InputControl
        onChange={handleAgeChange}
        value={form.age}
        label="Age"
        name="age"
        required={false}
        type="number"
      />

      <h3>Recap</h3>
      <table>
        <thead>
          <tr>
            <th>Full name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{form.fullName}</td>
            <td>{form.age}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

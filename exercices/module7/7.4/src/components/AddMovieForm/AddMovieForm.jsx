import { Form, Input, InputNumber, Button } from "antd";

const AddMovieForm = ({ onMovieAdded }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onMovieAdded(values);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    // Optionnel : afficher une notification ou log
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="add-movie"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600, margin: "0 auto" }}
      initialValues={{}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Titre"
        name="title"
        rules={[{ required: true, message: "Le titre est requis" }]}
      >
        <Input placeholder="Titre du film" />
      </Form.Item>
      <Form.Item
        label="Réalisateur"
        name="director"
        rules={[{ required: true, message: "Le réalisateur est requis" }]}
      >
        <Input placeholder="Nom du réalisateur" />
      </Form.Item>
      <Form.Item
        label="Durée (minutes)"
        name="duration"
        rules={[{ required: true, message: "La durée est requise" }]}
      >
        <InputNumber min={1} style={{ width: "100%" }} placeholder="Durée" />
      </Form.Item>
      <Form.Item
        label="Image (URL)"
        name="imageUrl"
        rules={[{ required: true, message: "L'URL de l'image est requise" }]}
      >
        <Input placeholder="URL de l'affiche" />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "La description est requise" }]}
      >
        <Input.TextArea placeholder="Description du film" />
      </Form.Item>
      <Form.Item
        label="Budget (M$)"
        name="budget"
        rules={[{ required: true, message: "Le budget est requis" }]}
      >
        <InputNumber min={0} style={{ width: "100%" }} placeholder="Budget" />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Ajouter le film
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddMovieForm;

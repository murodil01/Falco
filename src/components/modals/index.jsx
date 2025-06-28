import { Modal, Input, Button, Form } from "antd";
import { useState } from "react";
import { Loader } from "lucide-react";
import PropTypes from "prop-types";

const RegisterModal = ({ isOpen, onClose }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleFinish = (values) => {
    setLoading(true);
    console.log("Submitted values:", values);

    setTimeout(() => {
      setLoading(false);
      form.resetFields();
      onClose();
    }, 2000);
  };

  return (
    <Modal
      title="Register"
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      mask={true}
      width={430}
      className="w-[90%] sm:w-[80%] md:w-[60%] max-w-[500px] mx-auto rounded-lg"
      styles={{
        body: {
          maxHeight: "80vh",
          overflowY: "auto",
          padding: "24px",
        },
      }}
    >
      <div className="space-y-4">
        <Form
          layout="vertical"
          form={form}
          onFinish={handleFinish}
          className="space-y-2"
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Invalid email format" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? <Loader className="animate-spin w-4 h-4" /> : "Submit"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

RegisterModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RegisterModal;

import React, { useState } from "react";
import axios from "../../api/axios";
import Toast from "../../components/Toast";

function AddBook() {
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ display: false });

  const [value, setValue] = useState({
    isbn: "",
    title: "",
    subtitle: "",
    author: "",
    published: "",
    publisher: "",
    pages: "",
    description: "",
    website: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true);
    axios
      .post(`/books/add`, value, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("BUKUQU")}`,
        },
        withCredentials: false,
      })
      .then((res) => {
        setSubmit(true);
      })
      .catch((err) => {
        if (err.response?.status === 403) {
          setMessage({
            display: true,
            type: "error",
            content: "Failed Add Book",
          });
        }
      }).finally(() => {
        setLoading(false);
      })

  }

  return (
    <section className="bg-white md:h-[77.4vh] md:relative sm:px-[100px] px-[30px]" >
      <div className="container">
        {message.display && (
          <Toast
            type={message.type}
            content={message.content}
            closeToast={setMessage}
          />
        )}
        {!submit ? (
          <div>
            <h1 className="h2 text-center mb-10">Add Book</h1>
            <div className="flex flex-wrap justify-center">
              <div className="shadow-card w-[400px] p-[20px] rounded-[24px]">
                {!loading ? (
                  <>
                    <form onSubmit={handleSubmit}>
                      <label className="label-form">ISBN</label>
                      <input className="text-input mb-4"
                        placeholder="ISBN"
                        value={value.isbn}
                        type={"text"}
                        onChange={handleChange}
                        required
                        name="isbn"
                      />
                      <label className="label-form">Title</label>
                      <input className="text-input mb-4"
                        value={value.title}
                        onChange={handleChange}
                        required
                        name="title"
                      />
                      <label className="label-form">Description</label>
                      <textarea
                        className="text-input mb-4"
                        rows={5}
                        placeholder="Book description"
                        value={value.description}
                        onChange={handleChange}
                        name="description"
                      />
                      <label className="label-form">Subtitle</label>
                      <input className="text-input mb-4"
                        value={value.subtitle}
                        onChange={handleChange}
                        required
                        name="subtitle"
                      />
                      <label className="label-form">Author</label>
                      <input className="text-input mb-4"
                        value={value.author}
                        onChange={handleChange}
                        required
                        name="author"
                      />
                      <label className="label-form">Published</label>
                      <input className="text-input mb-4"
                        value={value.published}
                        onChange={handleChange}
                        required
                        type={"date"}
                        name="published"
                      />
                      <label className="label-form">Publisher</label>
                      <input className="text-input mb-4"
                        value={value.publisher}
                        onChange={handleChange}
                        required
                        name="publisher"
                      />
                      <label className="label-form">pages</label>
                      <input className="text-input mb-4"
                        value={value.pages}
                        onChange={handleChange}
                        required
                        name="pages"
                      />
                      <label className="label-form">Website</label>
                      <input className="text-input mb-4"
                        value={value.website}
                        onChange={handleChange}
                        required
                        name="website"
                      />
                      <button
                        className="btn-primary mb-5 w-[100%]"
                        type="submit"
                      >
                        ADD Book
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="h-[200px] flex flex-col justify-center items-center space-y-10">
                    <div className="loading-spinner"></div>
                    <p className="body">Submitting data...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-wrap justify-center">
              <div className="shadow-card w-[400px] p-[20px] rounded-[24px] text-center">
                <div className="flex justify-center mb-5">
                  <img src="/images/checklist.png" alt="checklist" />
                </div>

                <h1 className="h3 mb-3">Success Add Book!</h1>
                <div className="btn-primary">
                  <a href="/">GO TO DASHBOARD</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section >
  );
}

export default AddBook;

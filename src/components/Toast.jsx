import React from "react";

function Toast({ type, content, closeToast }) {
  setTimeout(() => closeToast({ display: false }), 2000);
  return (
    <div className="w-screen z-10 h-screen fixed top-0 right-0">
      <div className="flex justify-center mt-[100px]">
        <div className="sm:w-[420px] w-[360px] animate-slideIn">
          <div
            className={`toast-container ${type === "success" ? "toast-success" : "toast-error"
              }`}
          >
            <div className="flex flex-row items-center space-x-[24px]">
              <i
                class={`fa-solid ${type === "success"
                    ? "fa-circle-check"
                    : "fa-circle-exclamation"
                  }`}
              ></i>
              <div className="space-y-2">
                <p className="h3 text-neutral-500">{type}</p>
                <p className="body">{content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toast;

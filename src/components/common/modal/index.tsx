import { PropsWithChildren } from "react";

export type ModalProps = PropsWithChildren<{
  title?: string;
  isOpen: boolean;
  width?: string;
  onClose: () => void;
  onConfirm?: () => void;
}>;

const Modal = ({
  title,
  isOpen,
  width = "40rem",
  onClose,
  onConfirm,
  children,
}: ModalProps) => {
  return (
    <>
      {isOpen ? (
        <>
          <div
            className="fixed top-0 left-0 h-screen w-screen overflow-y-auto overflow-x-hidden py-8 z-50 outline-none focus:outline-none"
            onClick={onClose}
          >
            <div className="mx-auto" style={{ width }}>
              {/*content*/}
              <div
                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
                onClick={(e) => e.stopPropagation()}
              >
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {title ?? "Modal Title"}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={onClose}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">{children}</div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={onClose}
                  >
                    Close
                  </button>
                  {onConfirm && (
                    <button
                      className="bg-primary text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={onConfirm}
                    >
                      Save Changes
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default Modal;

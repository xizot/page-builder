import { PageType } from "../../pages/Home/types";
import Modal from "../common/modal";
import { componentMap } from "../types/ComponentTypes";

type PreviewProps = {
  isOpen: boolean;
  pageData: PageType;
  onClose: () => void;
};

const EmptySection = () => {
  return <div></div>;
};

const Preview = ({ isOpen, pageData, onClose }: PreviewProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} width="80%" title="Preview layout">
      {pageData?.widgets.map((widget) => {
        return (
          <div
            key={widget.id}
            className={`p-4 rounded-md mb-2 bg-gray-100 grid grid-cols-${widget.column} gap-4`}
          >
            {widget.widgetData?.map((data, idx) => {
              const Component = data.type
                ? componentMap[data.type]
                : EmptySection;

              return (
                <div key={idx} className="max-h-screen bg-gray-200">
                  <Component {...data} />
                </div>
              );
            })}
          </div>
        );
      })}
    </Modal>
  );
};

export default Preview;

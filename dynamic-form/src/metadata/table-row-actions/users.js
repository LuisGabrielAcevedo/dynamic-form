import {
  DynamicTableButtonComponent,
  DynamicTableQuestionModal
} from "../../lgx-react-components/index";
import User from "../../models/users";
import store from "../../../../store/index";
import * as RouterActions from "../../../../store/router/router.actions";

const productCategoryRowActions = [
  {
    icon: "edit",
    tooltip: "Editar",
    component: DynamicTableButtonComponent,
    event: arg =>
      store.dispatch(
        RouterActions.redirectAction({
          path: `/e-commerce/administration/users/edit/${arg._id}`
        })
      )
  },
  {
    icon: "delete",
    tooltip: "Eliminar",
    component: DynamicTableButtonComponent,
    modal: {
      type: DynamicTableQuestionModal,
      question: "Esta seguro que desea borrar el usuario?",
      successButtonText: "Si",
      successButtonEvent: async arg => await User.destroy(arg._id),
      cancelButtonText: "No"
    }
  }
];

export default productCategoryRowActions;

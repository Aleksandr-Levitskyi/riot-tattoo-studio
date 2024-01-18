import { createListItem } from "./renderList";
import  { LEARN_PLANS } from "./constants";

const listContainer = document.querySelector('.learning__items');

createListItem(LEARN_PLANS, listContainer);
import { takeEvery, call, put } from "redux-saga/effects";
import { REQUEST_POSTS, FETCH_POST } from "./types";
import { showLoader, hideLoader, showAlert } from "./actions";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchPosts);
    yield put({ type: FETCH_POST, payload });
    yield put(hideLoader());
  } catch {
    yield put(showAlert("Ошибка подключения к серверу"));
    yield put(hideLoader());
  }
}

async function fetchPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  return await response.json();
}

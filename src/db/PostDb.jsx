import * as idb from "idb";
class PostApi {
  openDB() {
    return idb.openDB("DB-Posts", 1, {
      upgrade(db) {
        const store = db.createObjectStore("posts", {
          keyPath: "id",
        });
        store.createIndex("title", "title"),
          store.createIndex("content", "content"),
          (store.transaction.oncomplete = () => {
            console.count("update is complete");
          });
      },
    });
  }
  async getStore() {
    const db = await this.openDB("DB-Posts", 1);
    const store = db.transaction("posts", "readwrite").objectStore("posts");
    return store;
  }
  async add(post) {
    const store = await this.getStore();
    const id = await store.add(post);
    return this.get(id);
  }
  async delete(id) {
    const store = await this.getStore();
    return store.delete(id);
  }
  async update(todo) {
    const store = await this.getStore();
    return store.put(todo);
  }
  async get(id) {
    const store = await this.getStore();
    return store.get(id);
  }
  async getAll() {
    const store = await this.getStore();
    return store.getAll();
  }
}

const postApi = new PostApi();
export default postApi;

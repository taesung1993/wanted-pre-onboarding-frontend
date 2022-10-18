class LocalStorageService {
  set<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get<T>(key: string): T {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}

export default new LocalStorageService();

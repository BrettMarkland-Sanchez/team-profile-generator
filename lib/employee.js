class Employee {
    
    #name;
    #id;
    #email;
      
    get #name() {
        return this.#name;
    }

    set #name(name) {
        this.#name = name;
    }
    
    get #id() {
        return this.#id;
    }

    set #id(id) {
        this.#id = id;
    }

    get #email() {
        return this.#email;
    }

    set #email(email) {
        this.#email = email;
    }

    constructor(name, id, email) {
        this.#name = name;
        this.#id = id;
        this.#email = email;
    }

  }
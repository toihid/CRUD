# CRUD Operation 
Det här projektet är en CRUD-applikation som låter dig utföra **Skapa, Läs, Uppdatera och Radera**-operationer. Följ instruktionerna nedan för att köra projektet lokalt.
---
Javascript, node js, express, mongodb, jest

## Steg för att Köra CRUD Operation Projektet

1. **Öppna Terminalen**  
   - Navigera till din projektkatalog i terminalen.

2. **Installera Beroenden**  
   - Kör följande kommando för att installera alla nödvändiga paket:  
     ```bash
     npm install
     ```

3. **Starta Projektet**  
   - Starta projektet genom att köra:  
     ```bash
     npm run dev
     ```

4. **Öppna Användargränssnittet**  
   - Öppna din webbläsare och gå till:  
     ```
     http://localhost:3030
     ```

5. **Kör Tester**  
   - Kör testskripten med:  
     ```bash
     npm run test
     ```

---

# API Endpoints

| **Method** | **URL**              | **Action**                                              | **Success Status Code** |
|------------|----------------------|--------------------------------------------------------|--------------------------|
| GET        | `api/products`       | Retrieves all products                                 | 200                      |
| GET        | `api/products/:id`   | Retrieves a product by ID                              | 200                      |
| POST       | `api/products`       | Creates a new product                                  | 201                      |
| PUT        | `api/products/:id`   | Updates a product by ID                                | 200                      |
| DELETE     | `api/products/:id`   | Deletes a product by ID                                | 200                      |
| DELETE     | `api/products`       | Deletes all products                                   | 200                      |
| GET        | `/`                  | Sends back HTML with all products in a table, including all product information | -                        |


---

## Support

Om du behöver hjälp eller stöter på problem, vänligen kontakta it.toihid@gmail.com. 😊

package co.com.sofka.crud.controllers;

import co.com.sofka.crud.models.Category;
import co.com.sofka.crud.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {

    @Autowired
    private CategoryService service;

    @GetMapping(value="api/categoryList")
    public Iterable<Category> list(){
        return  service.list();
    }

    @PostMapping(value = "api/category")
    public Category save(@RequestBody Category category){
        return service.save(category);
    }

    @PutMapping(value = "api/category")
    public Category update(@RequestBody Category category){
        if(category.getId() != null){
            return service.save(category);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @DeleteMapping(value = "api/{id}/category")
    public void delete(@PathVariable("id")Long id){
        service.delete(id);
    }

    @GetMapping(value = "api/{id}/category")
    public Category get(@PathVariable("id") Long id){
        return service.get(id);
    }

}

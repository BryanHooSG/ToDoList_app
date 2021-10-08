package org.generation.TodoList.controller.dto;

import org.generation.TodoList.repository.entity.Item;
import org.generation.TodoList.service.ItemService;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/item")
public class ItemController {

    final ItemService itemService;

    public ItemController(@Autowired ItemService itemService) {
        this.itemService = itemService;
    }

    @CrossOrigin
    @GetMapping("/all")
    public Iterable<Item> getItems() {
        return itemService.all();
    }

    @CrossOrigin
    @GetMapping( "/{id}" )
    public Item findItemById( @PathVariable Integer id )
    {
        return itemService.findById( id );
    }

    @CrossOrigin
    @DeleteMapping( "/{id}" )
    public void delete( @PathVariable Integer id )
    {
        itemService.delete( id );
    }

    @CrossOrigin
    @PostMapping("/add")
    public Item save(  @RequestParam(name="title", required = true) String title,
                       @RequestParam(name="description", required = true) String description,
                       @RequestParam(name="date", required = true) String date) {

        ItemDTO itemDto = new ItemDTO(title, description, date);
        return itemService.save(new Item(itemDto));
    }


}



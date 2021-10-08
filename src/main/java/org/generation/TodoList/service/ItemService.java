package org.generation.TodoList.service;

import org.generation.TodoList.repository.entity.*;
import java.util.*;

public interface ItemService {

    Item save(Item item);

    void delete(int itemId);

    List<Item> all();

    Item findById(int itemId);

}

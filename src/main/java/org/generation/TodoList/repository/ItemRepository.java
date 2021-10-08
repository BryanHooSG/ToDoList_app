package org.generation.TodoList.repository;

import org.generation.TodoList.repository.entity.Item;
import org.springframework.data.repository.*;

public interface ItemRepository extends CrudRepository<Item, Integer> {

}

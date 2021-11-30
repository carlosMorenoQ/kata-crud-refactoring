package co.com.sofka.crud.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="tab_group")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="category")
    private String group;

    @OneToMany(mappedBy= "category")
    private List<Todo> todo;

    public List<Todo> getTodo() {
        return todo;
    }

    public void setTodo(List<Todo> todo) {
        this.todo = todo;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGroup() {
        return group;
    }

    public void setGroup(String group) {
        this.group = group;
    }

}

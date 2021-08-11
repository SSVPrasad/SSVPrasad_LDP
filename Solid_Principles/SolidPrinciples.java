/*--------------Each Class in the following Program Has Single Responsibility--------*/
class Bookings            
{
	payment p;
	public void Bookings(payment p)
	{
    //payment p=new payment();
    this.p=p;
	p.save_details();
	}	
  public boolean availabilty()
  {
	  System.out.println("Enter Destination");
      return true;
  }
  public boolean make_payment()
  {
	  System.out.println("Choose payment mode");
      return true;
  }
 }
 
 
 
/*-------------- Open For Extension Closed for Modification --------------*/



interface Make_payments             
{
public void make_payment();
}



 class Netbanking implements Make_payments
{   public String make_payment(int n)
	{
	return "Successfully paid Rs."+n;
	}
}
 class Card implements Make_payments
{   public String make_payment()
	{
	return "Successfully paid Rs."+n;
	}
}




/*---------------Liskov's Principle--------------*/

 class Vehicle
{
    
    int avail;
    public int seats_available(int booked, int total)
    {
         this.avail=total-booked;
         return this.avail;
    }
    public int total_price(int dist,int cost)
    {
        return dist*cost;
    }
}
class Bus extends Vehicle
{
     public int seats_available(int booked, int total)
    {
         this.avail=total-booked;
         return this.avail;
    }
    public int total_price(int dist,int cost)
    {
        return dist*cost;
    }
}

 class Car extends Vehicle
{    int avail=0;
     public int seats_available(int booked, int total)
    {
         this.avail=total-booked;
         return this.avail;
    }
    public int total_price(int dist,int cost)
    {
        return dist*cost;
    }
}

/*-----------------------Interface Segregation Principle------------------*/
	
	interface Holiday_trip
{
	public void food_menu();
	public void accomodatioin_details();
}

 interface Causual_trip
{
	public void snacks_and_waterbottle();
	public void newspaper();
}

 class Holiday_Trip implements Causual_trip, Holiday_trip
{
	public void food_menu()
	{
		System.out.println("Select Food itemsfrom [Biryani, Burger, Pizza]");
	}
	public void accomodatioin_details()
	{
		System.out.println("Mention Hotel specifiactions");
	}
	public void newspaper()
	{
        System.out.println("Select yes/no: ");
	}
    public void snacks_and_waterbottle()
	{
		System.out.println("Select Yes/No: ");
	}
}
 class Casual_Trip implements Causual_trip
{
	public void newspaper()
	{
        System.out.println("Select yes/no");
	}
    public void snacks_and_waterbottle()
	{
		System.out.println("Select Yes/No");
		
	}
}
 class payment{
	boolean t;
    public void save_details()
    {
    System.out.println("Saved Succesfully");
    }
}

/*-------------Dependency Inversion Principle----------------------*/
 
 class Bookings            
{
	payment p;
	public void Bookings(payment p)
	{
    //payment p=new payment();
    this.p=p;
	p.save_details();
	}	
  public boolean availabilty()
  {
	  System.out.println("Enter Destination");
      return true;
  }
  public boolean make_payment()
  {
	  System.out.println("Choose payment mode");
      return true;
  }
 }

	


public class Main {
  public static void main(String[] args) {
    //System.out.println("Hello World!");
    payment p=new payment();
    Bookings b=new Bookings(p);
	
	
	
    Netbanking n=new Netbanking();
    System.out.println("State of Payment :"+n.make_payment(100));
    Card c=new Card();
    System.out.println("State of Payment :"+c.make_payment(200));
	
	
	 
    Vehicle v1= new Bus();
    System.out.println("The Available Seats in the Bus are "+v1.seats_available(20,40));
    Vehicle v2= new Car();
    System.out.println("The Cost of Hhiring car for 10KM is "+v2.total_price(10,10));
	
	
	Holiday_Trip h=new Holiday_Trip();
System.out.println(h.newspaper());
System.out.println(h.snacks_and_waterbottle());
Causual_trip ct=new Causual_trip();
System.out.println(ct.newspaper());
    
  }
}


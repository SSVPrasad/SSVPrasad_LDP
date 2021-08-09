/*--------------The Following Class has multiple responsibilities thus violating Single Responsibility--------*/
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
   
  public boolean signup(username, password)
  {
	  System.out.println("Login Success");
      return true;
  }
  
 }
 
 
 
/*-------------- Open For Extension Closed for Modification Vioalation --------------*/





 class Netbanking 
{   public void make_payment()
	{
	System.out.println("Payment Successfull");
	}
}
 class Card 
{   public void make_payment()
	{
	System.out.println("Payment Successfull");
	}
}

/*---------------Liskov's Principle Violation--------------*/

abstract class Member
{
 abstract boolean sign_in();
 
 abstract boolean sign_up();
 
 abstratc boolean password_reset(new_password, old_password);
 
}

 class Prime_member extends Member
{
	public boolean sign_in()
	{
		System.out.println("Enter sign in details");
		return true;
	}
	public boolean sign_up()
	{
		System.out.println("Enter sign up details");
		return true;
	}
	
	
	
	public boolean password_reset(new_password, old_password)
	{
		System.out.println("Password Changed Succesfully");
		return true;
	}
}
 class non_prime_member extends Member
{
	
	public boolean sign_in()
	{
		System.out.println("Enter sign in details");
		return true;
	}
	
	public boolean sign_up()
	{
		System.out.println("Enter sign up details");
		return true;
	}
	
}



/*-----------------------Interface Segregation Principle Violation------------------*/
	
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
		System.out.println("Select Food items:");
	}
	public void accomodatioin_details()
	{
		System.out.println("Mention Hotel specifiactions");
	}
	public void newspaper()
	{
        System.out.println("Select yes/no");
	}
    public void snacks_and_waterbottle()
	{
		System.out.println("Select Yes/No");
	}
}
 class Casual_Trip implements Causual_trip, Holiday_trip
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

/*-------------Dependency Inversion Principle Violation----------------------*/
 
 class Bookings            
{
	/*payment p;
	public void Bookings(payment p)
	{
    //payment p=new payment();
    this.p=p;
	p.save_details();
	}	*/
	
	
	String payment_mode="Card"
  public boolean availabilty()
  {
	  System.out.println("Enter Destination");
      return true;
  }
  public boolean make_payment()
  {
	  if(payment_mode=="Card")
	  {
	  System.out.println("Choose payment mode");
      return true;
	  }
	 else if(payment_mode=="Cash")
	  {
	  System.out.println("Choose payment mode");
      return true;
	  }
	  
	  else
		  System.out.println("Other Payment modes currently not available");
  }
 }

	


public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World!");
    payment p=new payment();
    Bookings b=new Bookings(p);
  }
}


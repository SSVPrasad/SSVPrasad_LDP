import java.util.*;

 class callme
 {
    void call(String s)
   {
     System.out.println(Thread.currentThread());
     System.out.print("[ " + s);
     try
     {
        Thread.sleep(10);
     }
     catch(Exception e)
     {
       System.out.println(e);
     }
     System.out.println(" ]");
   }
 }
 
 class caller implements Runnable
 {
   Thread t;
   callme target;
   String s;
  public caller(callme o,String s)
   {
     
     target=o;
     this.s=s;
     t=new Thread(this,s);
   
     t.start();
   }
   public void run()
   {
	   synchronized(target){
;
	   target.call(s);}
    
   }
   
 }

 class Synch
 {
   public static void main(String args[])
   { 
    
    callme o=new callme();
    
    caller o1=new caller(o,"1");  
    
    caller o2=new caller(o,"2");
         
    caller o3=new caller(o,"3");
	 caller o4=new caller(o,"4");
	  caller o5=new caller(o,"5");
	   caller o6=new caller(o,"6");
    try
     {
       o1.t.join();
       o2.t.join();
       o3.t.join();
	   o4.t.join();
	   o5.t.join();
	   o6.t.join();
     }
     catch(Exception e)
     {
       System.out.println(e);
     }
    
   }
 }
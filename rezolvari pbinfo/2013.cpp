#include <fstream>

using namespace std;

ifstream cin("numere18.in");
ofstream cout("numere18.out");

int x, task;

int main(){

    cin >> task >> x;

    int first_term = x * (x - 1) / 2 + 1;
    int last_term = first_term + x - 1;
    int add = 0;

    if(task % 2)
        cout << last_term * (last_term + 1) / 2 - first_term * (first_term + 1) / 2 + first_term;
    else{

        last_term = 0, add = 1;
        while(x > last_term){

            last_term += add;
            add++;

        }

        add--;
        first_term = last_term - add + 1;
        cout << add << " " << x - first_term + 1;


    }

}
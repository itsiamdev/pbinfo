#include <iostream>
using namespace std;

int main() {
	int nr, s = 0;
    do {
    	cin >> nr;
        if(nr % 2 == 0) {
            s += nr;
        }
    } while(nr != 0);
    cout << s;
}